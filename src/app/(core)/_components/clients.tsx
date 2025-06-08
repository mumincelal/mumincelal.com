import Image from "next/image";
import Link from "next/link";
import { clients } from "~/constants";

export const Clients = () => {
  return (
    <div className="grid grid-cols-2 gap-x-1.5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
      {clients.map((client) => (
        <Link
          key={client.key}
          href={client.link}
          className="flex items-center justify-center transition-opacity duration-200"
          target="_blank"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={100}
            height={100}
            className="mix-blend-darken grayscale"
          />
          <span className="sr-only">{client.name}</span>
        </Link>
      ))}
    </div>
  );
};
