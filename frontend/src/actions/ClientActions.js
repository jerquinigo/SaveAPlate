// import * as clientsApi from "../utils/UtilUsers.js";
// import { RECEIVED_ALL_USERS } from "./ActionTypes.js";
import * as usersApi from '../utils/UtilUsers.js'

import {POST_CLIENTS_CHANGES} from './ActionTypes.js'


export const postClientChanges = (clientChange) => {
  return {
  type: POST_CLIENTS_CHANGES,
  clientChange: clientChange
  }
}


export const postClientFormChanges = () => dispatch => {
  return


}
