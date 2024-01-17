import { Chance } from "chance";

const chance = Chance();
export const fakeName = () => {
  return chance.name({ middle: true });
};
