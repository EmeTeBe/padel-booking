import { useState } from "react";

type StepType = "hours" | "courts" | "calendar" | "time-slots";

export default function useReservation() {
  const [step, setStep] = useState<StepType>("hours");
  const [reservation, setReservation] = useState({
    hours: 0,
    court: "",
    date: null as Date | null,
  });

  const nextStep = () => {
    if (step === "hours") setStep("courts");
    else if (step === "courts") setStep("calendar");
    else if (step === "calendar") setStep("time-slots");
  };

  const prevStep = () => {
    if (step === "courts") setStep("hours");
    else if (step === "calendar") setStep("courts");
    else if (step === "time-slots") setStep("calendar");
  };

  return { step, reservation, setReservation, nextStep, prevStep };
}
