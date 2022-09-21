import dayjs from "dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();

export const formatToDayTime = date => dayjs(date).format("dddd, hh:mmA");
