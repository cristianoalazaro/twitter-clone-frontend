"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import Link from "next/link";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecomendationItem = ({ user }: Props) => {
    const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true)
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.name}`} className="block truncate">
          {user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">#{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following &&
            <Button label="Seguir" onClick={handleFollowButton} size={3} />
        }
      </div>
    </div>
  );
};

export const RecomendationItemSkeleton = () => {
    return (
        <div className="flex items-center gap-1">
            <div className="animate-pulse bg-gray-600 size-10 rounded-full "></div>
            <div className="flex flex-col flex-1 gap-1">
                <div className="animate-pulse bg-gray-600 h-4 w-3/4"></div>
                <div className="animate-pulse bg-gray-600 w-1/4 h-4"></div>
            </div>
        </div>
    )
}
