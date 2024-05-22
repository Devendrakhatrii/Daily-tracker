let content =
  "A good thing about being a woman in my late thirties is that, back in 1991, I was the perfect age to take in Disney’s Beauty and the";
const truncateString = (content, length) => {
  if (content.length > length) {
    return content.slice(0, length) + "...";
  } else return content;
};

console.log(truncateString(content, 30));
