import { useState } from "react";

type StepType = "calendar" | "hours" | "courts" | "time-slots";

type Reservation = {
  hours: number;
  court: string;
  date: Date | null;
};

export default function useReservation() {
  const [step, setStep] = useState<StepType>("calendar");
  const [reservation, setReservation] = useState<Reservation>({
    hours: 0,
    court: "",
    date: null,
  });

  // Actualizacion especifica para la fecha
  const updateDate = (date: Date) => {
    setReservation((prev) => ({ ...prev, date }));
  };

  const nextStep = () => {
    if (step === "calendar") setStep("hours");
    else if (step === "hours") setStep("courts");
    else if (step === "courts") setStep("time-slots");
  };

  const prevStep = () => {
    if (step === "hours") setStep("calendar");
    else if (step === "courts") setStep("hours");
    else if (step === "time-slots") setStep("courts");
  };

  return { step, reservation, updateDate, setReservation, nextStep, prevStep };
}
