
interface PropsI {
  className: string;
  children: React.ReactNode;
}

export default function Box({ className, children }: PropsI) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
