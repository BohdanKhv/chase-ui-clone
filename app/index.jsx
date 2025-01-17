import { Text, View, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { useRef, useState } from 'react'
import Checkbox from 'expo-checkbox';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Input = ({ title, value, onChangeText, placeholder, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    return (
        <Pressable style={{ width: '100%', marginBottom: 10 }}
            onPress={() => {
                inputRef.current.focus()
            }}
        >
            <Text style={isFocused ? styles.title : {
                ...styles.title,
                top: value ? 0 : 30,
            }}>
                {title}
            </Text>
            <TextInput
                ref={inputRef}
                style={{
                    ...styles.input,
                    borderColor: isFocused ? '#145bb5' : '#ccc',
                }}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </Pressable>
    )
}

const Index = () => {
    const [username, setUsername] = useState("elondust")
    const [password, setPassword] = useState('123123')
    const [rememberMe, setRememberMe] = useState(true)
    const [useToken, setUseToken] = useState(false)

    return (
        <ScrollView
            style={{
                backgroundColor: '#145bb5',
            }}
        >
      <StatusBar style="light" />
        <View
            style={styles.container}
        >
            <View
                style={styles.wrapperContainer}
            >
                <View
                    style={styles.wrapper}
                >
                    <Input
                        title="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter your username"
                        secureTextEntry={false}
                    />
                    <Input
                        title="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.checkboxContainer}>
                            <Checkbox style={styles.checkbox} value={rememberMe} onValueChange={setRememberMe} color="#145bb5" />
                            <Text style={styles.checkboxTitle}>Remember me</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Checkbox style={styles.checkbox} value={useToken} onValueChange={setUseToken} color="#145bb5" />
                            <Text style={styles.checkboxTitle}>Use token</Text>
                        </View>
                    </View>
                    <Link href="/accounts" asChild
                        replace={true}
                    >
                        <Pressable
                            style={{
                                width: '100%',
                                backgroundColor: '#145bb5',
                                padding: 10,
                                borderRadius: 6,
                                marginTop: 20,
                            }}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 500,
                                textAlign: 'center',
                            }}>
                                Sign in
                            </Text>
                        </Pressable>
                    </Link>
                    <View>
                        <Text
                            style={{
                                color: '#145bb5',
                                fontSize: 18,
                                textAlign: 'center',
                                marginTop: 20,
                                fontWeight: '500',
                                marginBottom: 10,
                            }}
                        >
                            Forgot User ID or Password?
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View
            style={{
                paddingTop: 40,
                backgroundColor: '#fff',
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            <Text
                style={{
                    color: '#145bb5',
                    fontSize: 14,
                    fontWeight: '500',
                }}
            >
                Sign up
            </Text>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#666',
                }}
            >
                |
            </Text>
            <Text
                style={{
                    color: '#145bb5',
                    fontSize: 14,
                    fontWeight: '500',
                }}
            >
                Open an account
            </Text>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#666',
                }}
            >
                |
            </Text>
            <Text
                style={{
                    color: '#145bb5',
                    fontSize: 14,
                    fontWeight: '500',
                }}
            >
                Privacy
            </Text>
        </View>
        <View style={{
            backgroundColor: '#f1f1f1',
        }}>
            <View
                style={{
                    paddingTop: 50,
                    paddingBottom: 20,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                }}
            >
                <Text style={{
                    color: '#666',
                    fontSize: 11,
                    textAlign: 'center',
                }}>
                    Deposit products provided by JPMorgan Chase Bank, N.A. Member FDIC
                </Text>
                <Text style={{
                    color: '#666',
                    fontSize: 11,
                    textAlign: 'center',
                }}>
                    Credit cards are issued by JPMorgan Chase Bank, N.A. Member FDIC
                </Text>
                <Text style={{
                    color: '#666',
                    fontSize: 11,
                    textAlign: 'center',
                }}>
                    © 2025 JPMorgan Chase & Co.
                </Text>
            </View>
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 10,
                    backgroundColor: '#f1f1f1',
                }}
            >
                <Text style={{
                    fontSize: 14,
                    color: '#444',
                    fontWeight: '500',
                }}>
                    DISCLOSURES
                </Text>
                <Text style={{
                    fontSize: 14,
                    paddingTop: 20,
                    color: '#666',
                }}>
                    Investment products and services are offered through J.P. Morgan Securities LLC (JPMS), a Member of FINRA and SIPC
                </Text>
            </View>
            <View
                style={{
                    marginHorizontal: 20,
                    marginBottom: 20,
                    padding: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                }}
            >
                <Text style={{
                    fontSize: 14,
                    color: '#444',
                }}>
                    INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT • NOT FDIC INSURED • NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY • NO BANK GUARANTEE • MAY LOSE VALUE
                </Text>
            </View>
            <View
                style={{
                    marginBottom: 40,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#145bb5',
                        fontSize: 14,
                        fontWeight: '500',
                    }}
                >
                    Terms of use
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        paddingHorizontal: 30,
                        fontWeight: '500',
                        color: '#666',
                    }}
                >
                    |
                </Text>
                <Text
                    style={{
                        color: '#145bb5',
                        fontSize: 14,
                        fontWeight: '500',
                    }}
                >
                    Accessibility
                </Text>
            </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#145bb5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperContainer: {
        width: '100%',
        paddingTop: 60,
        marginBottom: -20,
        paddingHorizontal: 20,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        padding: 14,
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderBottomWidth: 1,
    },
    title: {
        color: '#555',
        fontSize: 12,
        paddingHorizontal: 10,
        paddingBottom: 8,
        alignSelf: 'flex-start',
    },
    checkboxContainer: {
        flex: '1',
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxTitle: {
        fontSize: 16,
        color: '#222',
        marginLeft: 6,
    },
})

export default Index