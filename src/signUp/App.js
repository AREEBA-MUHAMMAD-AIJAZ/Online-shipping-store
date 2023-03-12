import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';



const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (text) => {
      setUsername(text);
    };
  
    const handleContactChange = (text) => {
      setContact(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };
  
    const handleSignUp = () => {
      // Handle sign up logic here
    };
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <TextInput
          placeholder="Contact"
          value={contact}
          onChangeText={handleContactChange}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Purchase</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default SignUpForm;
  