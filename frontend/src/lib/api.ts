const API_BASE_URL = "http://127.0.0.1:8000/api";

export interface PredictionResponse {
    risk_level: string;
    classification?: string;
    diagnosis?: string;
    probability_svm?: number;
    probability_knn?: number;
    probability?: number;
    explanation?: string;
    recommendations?: any;
    error?: string;
}

export async function predictCondition(condition: string, data: any) {
    try {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };
        const token = localStorage.getItem("token");
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}/predict/${condition}/`, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            // Handle non-200 responses
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || `Prediction failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error predicting ${condition}:`, error);
        throw error;
    }
}

export async function fetchHistory(page: number = 1, limit: number = 10) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please log in.");
        }
        const response = await fetch(`${API_BASE_URL}/history/?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch history: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching history:", error);
        throw error;
    }
}

export async function fetchAssessmentDetail(type: string, id: string) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please log in.");
        }

        // Convert UI type strings like "Heart Assessment" to API paths: "heart"
        const typePath = type.split(" ")[0].toLowerCase();

        const response = await fetch(`${API_BASE_URL}/history/${typePath}/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch details: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching assessment details:", error);
        throw error;
    }
}


export async function fetchPerformanceMetrics() {
    try {
        const response = await fetch(`${API_BASE_URL}/performance/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch performance metrics: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching performance metrics:", error);
        throw error;
    }
}

export async function fetchHowItWorksContent() {
    try {
        const response = await fetch(`${API_BASE_URL}/content/how-it-works/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch content: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching how it works content:", error);
        throw error;
    }
}

export async function loginUser(credentials: any) {
    try {
        const response = await fetch(`${API_BASE_URL}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Login failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export async function registerUser(data: any) {
    try {
        const response = await fetch(`${API_BASE_URL}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Registration failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
}
