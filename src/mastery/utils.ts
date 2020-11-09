import fetch from 'node-fetch';

/**
 * Get champion metadata
 * @param championId Champion ID
 */
async function getChampionMetadata(desiredChampionId: number, version: string): Promise<string | undefined> {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
    const { data: allChamps } = await res.json();

    let desiredChampion;
    for (const champName in allChamps) {
        const champ = allChamps[champName];
        const championId = parseInt(champ.key);
        if (desiredChampionId === championId) {
            desiredChampion = champ;
        }
    }

    return desiredChampion;
}

export { getChampionMetadata };