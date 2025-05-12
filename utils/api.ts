import axios from "axios";

// Determine the base URL based on the environment
const getBaseUrl = () => {
	return process.env.NEXT_PUBLIC_API_URL;
};

// Create axios instance with base configuration
const api = axios.create({
	baseURL: getBaseUrl(),
	headers: {
		"Content-Type": "application/json",
	},
});

// Contact request submission
export const submitContactRequest = async (data: {
	name: string;
	email: string;
	city: string;
	state: string;
	country: string;
	additionalMessage: string;
}) => {
	try {
		const response = await api.post("/contact-request/create", data);
		return response.data;
	} catch (error) {
		// Handle or rethrow the error
		if (axios.isAxiosError(error)) {
			// Axios error (4xx, 5xx responses)
			throw (
				error.response?.data ||
				new Error("Failed to submit contact request")
			);
		}
		// Network error or other unexpected errors
		throw new Error("An unexpected error occurred");
	}
};

export default api;
