import { useState,useEffect } from "react";
const useAuthValidate = (values, validations) => {
    const [errors, setErrors] = useState({});

    useEffect(() => {
        let newErrors = {};

        Object.keys(validations).forEach((field) => {
            const value = values[field]; // Lấy giá trị của từng trường
            const rules = validations[field];

            // Kiểm tra bắt buộc
            if (rules.required && !value) {
                newErrors[field] = `Trường '${field}' không được để trống!`;
            }

            // Kiểm tra độ dài tối thiểu
            if (rules.minLength && value.length < rules.minLength) {
                newErrors[field] = `Ít nhất ${rules.minLength} ký tự!`;
            }

            // Kiểm tra email hợp lệ
            if (rules.isEmail) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    newErrors[field] = "Email không hợp lệ!";
                }
            }

            // Kiểm tra mật khẩu mạnh
            if (rules.isStrongPassword) {
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
                if (!passwordRegex.test(value)) {
                    newErrors[field] = "Mật khẩu phải có ít nhất 6 ký tự, chữ hoa, chữ thường và số!";
                }
            }
        });

        // Kiểm tra trước khi cập nhật state để tránh rerender không cần thiết
        if (JSON.stringify(newErrors) !== JSON.stringify(errors)) {
            setErrors(newErrors);
        }

    }, [values]);

    return { errors, isValid: Object.keys(errors).length === 0 };
};

export default useAuthValidate;