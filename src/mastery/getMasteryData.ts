import { Regions } from '../constants';
import { LolApi } from '../apis/lol/lol';
import { getChampionMetadata } from './utils';

async function getMasteryData () {

  let res;
  const lol = new LolApi();

  const summonerName: string = 'JackaIope';
  const region: Regions = Regions.AMERICA_NORTH;
  const gameVersion = '10.22.1';

  res = await lol.Summoner.getByName(summonerName, region);
  const summoner = res.response;

  res = await lol.Champion.masteryBySummoner(summoner.id, region);
  const masteryData = res.response;
  const championId = masteryData[0].championId;

  const metadata = await getChampionMetadata(championId, gameVersion);
  console.log(metadata);
}

getMasteryData()
  .catch()
