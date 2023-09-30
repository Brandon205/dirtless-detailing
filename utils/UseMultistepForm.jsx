import { useState } from "react";

export function useMultistepForm(steps, currentStepIndex) {
    // const [currentStepIndex, setCurrentStepIndex] = useState(1);

    function next() {
        // setCurrentStepIndex(i => {
        //     if (i >= steps.length - 1) return i;
        //     return i + 1;
        // })
        console.log(currentStepIndex, steps.length)

        if (currentStepIndex === 1) {
            setCurrentStepIndex(2)
        }
        // setCurrentStepIndex(i => {
        //     if (i >= 7) return i
        //     return i + 1
        // })
        // let i = currentStepIndex;
        // console.log(currentStepIndex, i)
        // setCurrentStepIndex(i + 1)

        // if (currentStepIndex >= steps.length - 1) {
        //     console.log('hit')
        //     // setCurrentStepIndex(currentStepIndex)
        // } else {
        //     let i = currentStepIndex + 1
        //     setCurrentStepIndex(i + 1)
        // }
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i;
            return i - 1;
        })
    }

    // function goTo(index) {
    //     setCurrentStepIndex(index);
    // }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        // goTo,
        next,
        back,
    }
}
