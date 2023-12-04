"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetDataSpotify } from "../hooks/useGetDataSpotify";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { BiLogoSpotify } from "react-icons/bi";
import { motion } from "framer-motion";

export default function SpotifyCard() {
  const { data, error, isLoading } = useGetDataSpotify();

  const menit = data?.duration / 60000;
  const detik = data?.duration / 1000;
  const duration_menit = Number(menit.toFixed(2));

  if (isLoading || error)
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Spotify" icon={<BiLogoSpotify className= "text-green-500" size={24} />}/>
          <SectionSubHeading>
            <p>Fetch API from Spotify</p>
          </SectionSubHeading>
        </div>
        <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center lg:hover:shadow-md">
          <div className="relative w-full">
            <div className="flex  items-center gap-8">
              <div className="w-[75px] h-[75px] overflow-hidden rounded-lg sm:w-[100px] sm:h-[100px]  bg-neutral-300 dark:bg-neutral-700 animate-pulse">
              <Image
                    src= 'https://res.cloudinary.com/dmmbiqyub/image/upload/v1701516483/livii_efdy0d.jpg'
                    alt="Album art"
                    width={100}
                    height={100}
                  />
              </div>

              <div className="flex flex-col items-start gap-1 md:gap-3">
                <div className="w-[178px] rounded h-4 animate-pulse">
                  <h1 className=" text-xs md:text-md font-semibold ">
                    Spotify
                  </h1>
                </div>
                <div className="w-[187px] rounded h-5 animate-pulse">
                  <h3 className="text-lg font-bold hover:underline decoration-2 underline-offset-2">
                    Not Listening
                  </h3>
                </div>
                <div className="w-[143px] rounded h-4 animate-pulse">
                <h1 className=" text-xs md:text-md font-semibold ">
                  Renaldi Playlist
                </h1>
                </div>
              </div>
            </div>
            <Link
              href={"https://spotify.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 right-0 "
            >
              <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5"/>
            </Link>
          </div>
        </div>
      </div>
    );

  if (data)
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Spotify" icon={<BiLogoSpotify className= "text-green-500" size={24} />}/>
          <SectionSubHeading>
            <p>My Playlist Song</p>
          </SectionSubHeading>
        </div>
        <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center lg:hover:shadow-md">
          <div className="flex justify-between items-center w-full">
            <div className="flex  items-center gap-6">
              <Link href={data?.href} target="_blank" rel="noopener noreferrer">
                <div className="w-[75px] overflow-hidden rounded-lg sm:w-[100px] shadow-md">
                  <Image
                    src={data?.albumArt.url}
                    alt="Album art"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <div className="flex flex-col items-start gap-1 md:gap-3">
                <h1 className=" text-xs md:text-md font-semibold ">
                  {data.currentlyPlaying ? "LISTENING" : null}
                </h1>
                <Link
                  href={data?.currentlyPlaying ? data?.href : ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-bold hover:underline decoration-2 underline-offset-2">
                    {data.currentlyPlaying ? data?.name : null}
                  </h3>
                </Link>
                <h1 className=" font-semibold md:text-md text-sm">
                  {data?.artists.map((artist) => artist.name).join(", ")}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-12 items-center h-full" >
              <motion.div animate={{ rotate: 360 }} 
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} >
              <Link
                href={"https://spotify.com"}
                target="_blank"
                rel="noopener noreferrer"
                className=" top-0 right-0 "
              >
                <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5 text-green-500"/>
              </Link>
              </motion.div>
              <h1 className="text-sm font-semibold right-0 bottom-0">
                {duration_menit}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}