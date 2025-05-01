import eventEmitter from "./eventEmitter.js";
// Event Producer
const registerUser = (username, email) => {
    console.log(`User ${username} registered successfully`);
    // Emit the event
    eventEmitter.emit('userRegistered', { username, email });
};

export default registerUser;    