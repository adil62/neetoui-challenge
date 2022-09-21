import dayjs from "dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();
