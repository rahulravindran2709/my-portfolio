export interface FactItemProps {
  label: string;
  value: number;
}

export interface OdometerProps {
  value: number;
}
const BASE_DURATION_MILLISECONDS = 500;
const Odometer = ({ value }: OdometerProps) => {
  if (!Number.isInteger(value) || value > 999) {
    return null;
  }
  const [hundreds, tens, ones] = value
    .toString()
    .split("")
    .map((x) => parseInt(x));

  return (
    <div className="text-shadow-[0_-1px_rgba(0_0_0_0.9)] mx-auto my-[2em] inline-flex h-[1em] rounded-xs text-center text-[92px] text-white/90">
      <OdometerDigit
        key={`hundreds_${hundreds}`}
        value={hundreds}
        position={2}
      />
      <OdometerDigit key={`hundreds_${tens}`} value={tens} position={1} />
      <OdometerDigit key={`hundreds_${ones}`} value={ones} position={0} />
    </div>
  );
};

export interface OdometerDigitProps {
  value: number;
  position: number;
}
const OdometerDigit = ({ value, position }: OdometerDigitProps) => {
  if (!Number.isFinite(value)) {
    return null;
  }
  const durationVariants = [
    "[animation-duration:2.5s]",
    "[animation-duration:2.5s]",
    "animate-duration-[2000ms]",
  ];
  const transformClass = "translate-y-[-8em]";
  const durationClass = durationVariants[position ?? 0];
  return (
    <div className="inline-block h-[1em] w-[0.59em] overflow-hidden py-0 text-left">
      <div
        className={`animate-slide-vertical ${durationClass} leading-[1em] ${transformClass} flex flex-col `}
      >
        <div className="inline-block">0</div>
        <div className="inline-block">9</div>
        <div className="inline-block">8</div>
        <div className="inline-block">7</div>
        <div className="inline-block">6</div>
        <div className="inline-block">5</div>
        <div className="inline-block">4</div>
        <div className="inline-block">3</div>
        <div className="inline-block">2</div>
        <div className="inline-block">1</div>
        <div className="inline-block">0</div>
      </div>
    </div>
  );
};

export const Factitem = ({ label, value }: FactItemProps) => {
  return (
    <div className="funfact-item flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:flex-nowrap lg:justify-start">
      <div className="font-medium">
        <Odometer value={57} />
      </div>
      <div className="text">
        Years of <br />
        Experience
      </div>
    </div>
  );
};
