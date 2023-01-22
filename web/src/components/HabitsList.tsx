import * as CheckBox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface HabitsListProps {
  date: Date;
  onCompletedChanged: (completed: number) => void
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>,
  completedHabits: string[]
}

export function HabitsList({ date, onCompletedChanged }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString()
      }
    }).then((response) => {
      setHabitsInfo(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])


  const isDateInPast = dayjs(date)
    .endOf('day') // pega a data e coloca o ultimo horario do dia ex: 23:59:59
    .isBefore(new Date())

  async function handleToogleHabit(habitId: string) {
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)
    let completedHabits: string[] = []

    try {
      await api.patch(`/habits/${habitId}/toogle`)

      if (isHabitAlreadyCompleted) {
        // remover da lista
        completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
      } else {
        // add na lista
        completedHabits = [...habitsInfo!.completedHabits, habitId]
      }

      setHabitsInfo({
        possibleHabits: habitsInfo!.possibleHabits,
        completedHabits,
      })

      onCompletedChanged(completedHabits.length)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map(habit => {
        return (
          <CheckBox.Root
            key={habit.id}
            onCheckedChange={() => handleToogleHabit(habit.id)}
            checked={habitsInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed" // group: para fazer estilizacoes baseadas em propriedades que este elemento tem, porem dentro de outros elementos interno a ele
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-900 group-focus:ring-offset-2 group-focus:ring-offset-background">
              <CheckBox.Indicator>
                <Check size={20} className="text-white" />
              </CheckBox.Indicator>
            </div>

            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
              {habit.title}
            </span>

          </CheckBox.Root>
        )
      })}

    </div>
  )

}