"use client";

import { ReactElement, useEffect, useState, useSyncExternalStore } from "react";

import { CheckBoxStore } from "@/app/stores/colorCheckboxStore";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/Heading";
import SoundcloudEmbed from "@/components/ui/soundcloudEmbed";
import { useAccent } from "@/context/AccentContext";

/**
 * A section element containing a card with a Soundcloud playlist player with some of my music.
 * @returns {ReactElement} A section element containing a card with a Soundcloud playlist player with some of my music.
 */
export default function MusicSection(): ReactElement {
  const isChecked = useSyncExternalStore(CheckBoxStore.subscribe, CheckBoxStore.getIsChecked, () => false);

  const { accent } = useAccent();

  const DEFAULT_COLOR = "#eb575a";

  const makeEmbedURL = (hex: string) => {
    const CLEANED_HEX = hex.replace(/^#/, "");
    return `https://w.soundcloud.com/player/?\
url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A112988860\
&color=%23${CLEANED_HEX}\
&auto_play=false\
&hide_related=true\
&show_comments=false\
&show_user=true\
&show_reposts=false\
&show_teaser=true`;
  };

  const [embedURL, setEmbedURL] = useState<string>(() => {
    return isChecked ? makeEmbedURL(DEFAULT_COLOR) : makeEmbedURL(accent || DEFAULT_COLOR);
  });

  // Update embed URL only when reloads are allowed
  useEffect(() => {
    if (!isChecked) {
      const id = setTimeout(() => {
        setEmbedURL(makeEmbedURL(accent || DEFAULT_COLOR));
      });
      return () => clearTimeout(id);
    }
  }, [isChecked, accent]);

  return (
    <section id="music-section" className="px-4">
      <div className="mb-8">
        <Heading level={3} text="Some of My Music" />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-mantle hover:border-accent focus-visible:border-accent transition-colors duration-200 shadow-lg hover:shadow-xl">
          <CardContent>
            <SoundcloudEmbed embedURL={embedURL} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
