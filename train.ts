function countOccurrences(obj: Record<string, unknown>, key: string): number {
    let count = 0;

    for (const k in obj) {
        if (k === key) {
            count++;
        }

        const value = obj[k];
        if (typeof value === "object" && value !== null) {
            count += countOccurrences(value as Record<string, unknown>, key);
        }
    }

    return count;
}

console.log(
    countOccurrences(
        { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
        "model",
    ),
);
