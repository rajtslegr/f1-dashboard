interface RaceCardProps {
  round: string;
  date: string;
  name: string;
  circuit: string;
}

const RaceCard: React.FC<RaceCardProps> = ({ round, date, name, circuit }) => (
  <div className="flex flex-col rounded-xl bg-slate-900 p-5">
    <h2 className="text-xl">
      {round}. {name}
    </h2>
    <div className="flex flex-row items-center justify-between space-x-2">
      <p className="mt-2 text-sm text-gray-400">{circuit}</p>
      <p className="mt-2 text-sm text-gray-400">{date}</p>
    </div>
  </div>
);

export default RaceCard;
