import formatDistanceToNow from 'date-fns/formatDistanceToNow';
export const getTimeStamp = timeStamp => {
  return formatDistanceToNow(new Date(timeStamp));
};
