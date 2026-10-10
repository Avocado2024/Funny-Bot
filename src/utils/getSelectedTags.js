export function getSelectedTags(answers, threshold = 0.5) {
  return (
    Object.values(answers)
      .flatMap(({ probabilities, legend }) =>
        Object.entries(probabilities)
          .filter(([, probability]) => probability >= threshold)
          .map(([index, probability]) => ({ tag: legend[index], probability })),
      )
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 3) // Get top 3 tags
      // Return comma-separated tags
      .map(({ tag }) => tag)
      .join(",")
  );
}
