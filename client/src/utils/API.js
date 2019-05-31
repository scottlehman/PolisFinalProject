import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users/getusers");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Retrieves a user to the database
  signIn: function(userData) {
    return axios.post("/api/users/signin", userData);
  },
  // Saves a user to the database
  signUp: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  stateElections: function(inputState){
  return axios.post(`https://api.votesmart.org/Election.getElectionByYearState?key=46edbc4757a5641997797349fe5cec1f&year=2019&stateId=${inputState}&o=JSON`)
  }
};