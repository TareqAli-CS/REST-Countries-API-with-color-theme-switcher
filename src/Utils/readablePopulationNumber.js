export default function readablePopulationNumber(population) {
    if (population < 1000) return population;
    if (population < 1000000) return `${(population / 1000).toFixed(1)}k`;
    return `${(population / 1000000).toFixed(1)}m`;
}