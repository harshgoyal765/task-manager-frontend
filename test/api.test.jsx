import axios from "axios";

test("API should return tasks", async () => {

const response = await axios.get(
"http://localhost:5000/api/tasks"
);

expect(response.status).toBe(200);

});