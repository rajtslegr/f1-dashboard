import getFlagUrl from '~/utils/getFlagUrl';

interface RaceCardProps {
  round: string;
  date: string;
  name: string;
  circuit: string;
  country: string;
}

const RaceCard: React.FC<RaceCardProps> = ({
  round,
  date,
  name,
  circuit,
  country,
}) => (
  <div className="flex flex-row items-center space-x-4 overflow-hidden rounded-xl bg-white pr-4 shadow-lg">
    <div className="flex h-full w-16 items-center justify-center bg-f1-red text-2xl font-bold italic text-white">
      {round}.
    </div>
    <div className="flex w-full flex-row items-center space-x-4 py-4">
      <img
        src={getFlagUrl(country)}
        alt={`${country} flag`}
        className="h-16 w-20 rounded-xl object-cover shadow-lg"
      />
      <div className="flex w-full flex-col">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex w-full flex-row justify-between">
          <p className="mt-2 text-sm text-gray-400">{circuit}</p>
          <p className="mt-2 text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

export default RaceCard;
