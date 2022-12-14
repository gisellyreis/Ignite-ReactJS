import { FormContainer, MinutesInput, TaskInput } from "./styles";
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { CyclesContext } from '../../../../contexts/CyclesContext';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput 
        id="task" 
        placeholder="Dê um nome para o seu projeto" 
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutes">durante</label>
      <MinutesInput 
        type="number" 
        id="minutes" 
        placeholder="00" 
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutes', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}