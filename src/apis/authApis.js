import axios from "axios"
const API_BASE_URL = " http://localhost:5000"


// API auth Login
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, loginData);

        // Kiểm tra thành công dựa trên `response.data.success`
        if (response.data && response.data.success) {
            return response.data; // Trả về toàn bộ dữ liệu từ API
        } else {
            return { success: false, message: response.data.message || "Có lỗi xảy ra!" };
        }
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data.message || "Có lỗi xảy ra!";
            return { success: false, message: errorMessage };
        } else {
            console.error("Lỗi khi đăng nhập:", error);
            return { success: false, message: "Không thể kết nối đến server!" };
        }
    }
};