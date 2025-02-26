export const isRecordEmpty = <T>(items: Record<string, T>): boolean => {
    for (const _ in items) {
        return false;
    }
    return true;
};
