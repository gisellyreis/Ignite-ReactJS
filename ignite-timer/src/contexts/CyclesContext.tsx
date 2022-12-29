import { createContext, ReactNode, useReducer, useState } from "react";
import { ActionTypes } from "../reducers/cycles/actions";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

interface CreateCycleData {
  task: string;
  minutes: number;
}

interface CyclesContextType {
  cycles: Cycle[],
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  secondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  handleSetSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interrupCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })
  
  const [secondsPassed, setSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState 
  
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleSetSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      }
    })

    setSecondsPassed(0)
  }
  
  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      }
    })
  }

  function interrupCurrentCycle() { 
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      }
    })
  }


  return (
    <CyclesContext.Provider 
      value={{ 
        cycles,
        activeCycle, 
        activeCycleId,
        secondsPassed,
        handleSetSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interrupCurrentCycle,
      }}
    >
      { children }
    </CyclesContext.Provider>
  )
}