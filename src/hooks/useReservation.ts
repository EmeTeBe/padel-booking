import { useState } from "react";

type StepType = "hours" | "courts" | "calendar" | "time-slots";

type Reservation = {
  hours: number;
  court: string;
  date: Date | null;
};

export default function useReservation() {
  const [step, setStep] = useState<StepType>("hours");
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
    if (step === "hours") setStep("courts");
    else if (step === "courts") setStep("calendar");
    else if (step === "calendar") setStep("time-slots");
  };

  const prevStep = () => {
    if (step === "courts") setStep("hours");
    else if (step === "calendar") setStep("courts");
    else if (step === "time-slots") setStep("calendar");
  };

  return { step, reservation, updateDate, setReservation, nextStep, prevStep };
}
