import {
  getAccessToken,
  getCurrentTrack,
  getLastPlayedTrack,
  getQueue,
  getTrack,
} from "@/app/lib/spotify";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const accessToken = await getAccessToken();
  const track = await getCurrentTrack(accessToken);
  const lastTrack = await getLastPlayedTrack(accessToken);
  const queue = await getQueue(accessToken);
  const id = track ? track.item.id : null;
  const trackId = await getTrack(accessToken, id);
  if (!accessToken)
    return NextResponse.json(
      {
        error: "Error fetching access_token from Spotify",
      },
      { status: 500 }
    );
  if (track) {
    if (trackId) {
      if (queue)
        return NextResponse.json({
          queueName: queue,
          duration: trackId.duration_ms,
          id: track.item.id,
          name: track.item.name,
          artists: track.item.artists.map((artist) => {
            return { name: artist.name, href: artist.external_urls.spotify };
          }),
          href: track.item.external_urls.spotify,
          albumArt: track.item.album.images[0],
          currentlyPlaying: true,
        });
    }}
  if (lastTrack) {
    return NextResponse.json({
      last_name: lastTrack.items[0].track.name,
      last_artists: lastTrack.items[0].track.artists.map((artist) => {
        return {
          name: artist.name,
          href: artist.external_urls.spotify,
        };
      }),
      last_href: lastTrack.items[0].track.external_urls.spotify,
      last_albumArt: lastTrack.items[0].track.album.images[0],
      last_currentlyPlaying: false,
    });}
  return NextResponse.json(
    {
      error: "Error fetching data from Spotify",
    },
    { status: 500 }
  );}