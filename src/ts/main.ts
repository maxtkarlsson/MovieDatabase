import axios from "axios";
import { IOmdbResponse } from "./models/IOmbdResponse";

axios.get<IOmdbResponse>("...").then((response) => {
  //response.data.Search[0].xxx - exempel, visar första objektet i vår lista. Den ska ju loopas sen.
});
