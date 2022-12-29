import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { CountdownContainer, Separator } from "./styles";

export function Countdown() {
  const { 
    activeCycle, 
    activeCycleId, 
    secondsPassed,
    handleSetSecondsPassed,
    markCurrentCycleAsFinished, 
  } = useContext(CyclesContext)
 
  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if(activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle?.task}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if(activeCycle) {
     interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(), new Date(activeCycle.startDate))
        
        if(secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          handleSetSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          handleSetSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, handleSetSecondsPassed, markCurrentCycleAsFinished])
  
  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}