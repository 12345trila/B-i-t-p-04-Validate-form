import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignInScreen = () => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const validatePhoneNumber = (phone) => {
        const regex = /^(03|05|07|08|09)[0-9]{8}$/; // Kiểm tra đầu số hợp lệ + 10 chữ số
        return regex.test(phone);
    };

    const handleContinue = () => {
        if (!validatePhoneNumber(phone)) {
            setError("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
        } else {
            setError(""); // Xóa lỗi nếu hợp lệ
            alert("Số điện thoại hợp lệ!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <Text style={styles.label}>Nhập số điện thoại</Text>
            <Text style={styles.description}>
                Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
            </Text>

            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity 
                style={styles.button} 
                onPress={handleContinue}
                disabled={!phone} // Vô hiệu hóa nếu không nhập số
            >
                <Text style={styles.buttonText}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
    },
    description: {
        fontSize: 14,
        color: "gray",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    inputError: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "blue",
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default SignInScreen;
