import Button from '@/src/components/atoms/button/Button';
import Input from '@/src/components/atoms/input/Input';
import { useThemeAwareObject } from '@/src/theme';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStyles } from './LoginForm.styles';
import { ILoginFormProps } from './LoginForm.types';

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit, isLoading }) => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            mobile: ''
        }
    });

    const styles = useThemeAwareObject(getStyles);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Controller
                    control={control}
                    name="mobile"
                    rules={{
                        required: 'Mobile is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Phone must be 10 digits'
                        }
                    }}
                    render={({ field }) => (
                        <Input
                            placeholder="Please enter your phone number"
                            label="Phone Number"
                            maxLength={10}
                            mode="outlined"
                            left={<TextInput.Icon icon="cellphone" />}
                            value={field.value}
                            onChangeText={field.onChange}
                            errorMessage={errors.mobile?.message}
                        />
                    )}
                />
            </View>
            <Button content="Login" onPress={handleSubmit(onSubmit)} loading={isLoading} />
        </View>
    );
};

export default LoginForm;
