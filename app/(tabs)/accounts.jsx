import { IconSymbol } from '@/components/ui/IconSymbol'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'


const Wallets = () => {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <View
            style={{
                paddingHorizontal: 20,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    marginVertical: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: '600',
                    }}
                >
                    Accounts
                </Text>
                <IconSymbol
                    name="more-dots"
                    size={28}
                    color="#666"
                />
            </View>
            <View
                style={{
                    borderWidth: 1,
                    borderColor: '#d6dce0',
                    backgroundColor: '#fff',
                    borderRadius: 16,
                }}
            >
                <Pressable
                    style={{
                        paddingHorizontal: 14,
                        paddingVertical: 20,
                        flexDirection: 'row',
                        gap: 20,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderColor: '#d6dce0',
                        backgroundColor: openIndex === 0 ? '#005EB8' : '#fff',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    }}
                    onPress={() => setOpenIndex(openIndex === 0 ? null : 0)}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: openIndex === 0 ? '#fff' : '#000',
                        }}
                    >
                        Bank accounts {'(3)'}
                    </Text>
                    <Text
                        style={{
                            color: openIndex === 0 ? '#fff' : '#000',
                        }}
                    >
                        $18,352,684.33
                    </Text>
                </Pressable>
                {openIndex === 0 && (
                    <>
                    <View style={{
                        borderColor: '#d6dce0',
                        borderBottomWidth: 1,
                        marginLeft: 14,
                        marginTop: 14,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        TOTAL CHECKING (...1539){' ▶'}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    paddingVertical: 20,
                                }}>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 32,
                                            }}
                                        >
                                            $785,684.33
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'right',
                                            }}
                                        >
                                            Available balance
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                paddingLeft: 6,
                                paddingRight: 6,
                            }}>
                                <IconSymbol
                                    name="pause"
                                    size={20}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{
                        borderColor: '#d6dce0',
                        borderBottomWidth: 1,
                        marginLeft: 14,
                        marginTop: 14,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        TOTAL SAVINGS (...1735){' ▶'}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    paddingVertical: 20,
                                }}>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 32,
                                            }}
                                        >
                                            $3,512,612.91
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'right',
                                            }}
                                        >
                                            Available balance
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                paddingLeft: 6,
                                paddingRight: 6,
                            }}>
                                <IconSymbol
                                    name="pause"
                                    size={20}
                                />
                            </View>
                        </View>
                    </View>

                    
                    <View style={{
                        marginLeft: 14,
                        marginTop: 14,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        BUS COMPLETE CHK (...6372){' ▶'}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    paddingVertical: 20,
                                }}>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 32,
                                            }}
                                        >
                                            ${(18352684.33 - 785684.33 - 3512612.91).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'right',
                                            }}
                                        >
                                            Available balance
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                paddingLeft: 6,
                                paddingRight: 6,
                            }}>
                                <IconSymbol
                                    name="pause"
                                    size={20}
                                />
                            </View>
                        </View>
                    </View>
                    </>
                )}
                <Pressable
                    style={{
                        paddingHorizontal: 14,
                        paddingVertical: 20,
                        flexDirection: 'row',
                        gap: 20,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderColor: '#d6dce0',
                        backgroundColor: openIndex === 1 ? '#005EB8' : '#fff',
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    }}
                    onPress={() => setOpenIndex(openIndex === 1 ? null : 1)}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: openIndex === 1 ? '#fff' : '#000',
                        }}
                    >
                        Credit cards {'(1)'}
                    </Text>
                    <Text
                        style={{
                            color: openIndex === 1 ? '#fff' : '#000',
                        }}
                    >
                        $1,663.08
                    </Text>
                </Pressable>
                {openIndex === 1 && (
                    <>
                    <View style={{
                        borderColor: '#d6dce0',
                        borderBottomWidth: 1,
                        marginLeft: 14,
                        marginTop: 14,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <View
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        Freedom Unlimited (...5127){' ▶'}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'justify-between',
                                    alignItems: 'center',
                                    paddingVertical: 20,
                                }}>
                                    <View
                                        style={{
                                            flexGrow: 1,
                                        }}
                                    >
                                        <Image
                                            source={require('@/assets/images/visa.png')}
                                            contentFit='contain'
                                            style={{
                                                height: 50,
                                                width: 80,
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 32,
                                            }}
                                        >
                                            $1,663.08
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                textAlign: 'right',
                                            }}
                                        >
                                            Current balance
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                paddingLeft: 6,
                                paddingRight: 6,
                            }}>
                                <IconSymbol
                                    name="pause"
                                    size={20}
                                />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingBottom: 14,
                            gap: 10,
                        }}>
                            <View style={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'green',
                            }}>
                                <IconSymbol name="check" size={20} color="#fff" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    textAlign: 'right',
                                }}
                            >
                                You've scheduled multiple payments.
                            </Text>
                        </View>
                    </View>
                    </>
                )}
                <View
                    style={{
                        padding: 20,
                        flexDirection: 'row',
                        gap: 20,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderColor: '#d6dce0',
                        backgroundColor: '#fff',
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderRadius: 16,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                        }}
                    >
                        Link external accounts
                    </Text>
                    <IconSymbol
                        name="chevron-right"
                        size={20}
                    />
                </View>
            </View>
        </View>
    )
}


const Accounts = () => {
    return (
    <ScrollView
        style={{
            backgroundColor: '#f4f6f8',
            flex: 1,
        }}
    >
        <View
        style={{
            paddingBottom: 20,
        }}>
        <StatusBar style="dark"
            backgroundColor='#f4f6f8'
        />
            <Text
            style={{
                fontSize: 28,
                fontWeight: '600',
                paddingHorizontal: 20
            }}
            >
            Good afternoon
            </Text>
            <Text
            style={{
                color: 'gray',
                fontSize: 16,
                marginTop: 8,
                paddingHorizontal: 20
            }}
            >
            {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date())}
        </Text>
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            >
            <View
            style={{
                flexDirection: 'row',
                gap: 10,
                paddingHorizontal: 20,
                paddingVertical: 20,
            }}>
                <Pressable
                style={({ pressed }) => [
                    {
                    backgroundColor: pressed
                        ? '#dcebfb'
                        : '#fff',
                    },
                    styles.button,
                ]}
                >
                <Text style={{ color: '#005EB8', fontSize: 16, fontWeight: "500" }}>
                    +
                </Text>
                </Pressable>
                <Pressable
                style={({ pressed }) => [
                    {
                    backgroundColor: pressed
                        ? '#dcebfb'
                        : '#fff',
                    },
                    styles.button,
                ]}
                >
                <Text style={{ color: '#005EB8', fontSize: 16, fontWeight: "500" }}>
                    Send | Zelle®
                </Text>
                </Pressable>
                <Pressable
                style={({ pressed }) => [
                    {
                    backgroundColor: pressed
                        ? '#dcebfb'
                        : '#fff',
                    },
                    styles.button,
                ]}
                >
                <Text style={{ color: '#005EB8', fontSize: 16, fontWeight: "500" }}>
                    Deposit checks
                </Text>
                </Pressable>
                <Pressable
                style={({ pressed }) => [
                    {
                    backgroundColor: pressed
                        ? '#dcebfb'
                        : '#fff',
                    },
                    styles.button,
                ]}
                >
                <Text style={{ color: '#005EB8', fontSize: 16, fontWeight: "500" }}>
                    Send Zelle® activity
                </Text>
                </Pressable>
            </View>
        </ScrollView>
        <View
            style={{
                marginHorizontal: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: '#d6dce0',
                backgroundColor: '#fff',
                borderRadius: 16,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#dcebfb',
                        borderRadius: "50%",
                    }}
                >
                    <IconSymbol
                        name="pay"
                        size={26}
                        color={"#005EB8"}
                    />
                </View>
                <View>
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 10,
                            marginBottom: 6,
                        }}
                    >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '500',
                        }}>
                            Snapshot
                        </Text>
                        <View
                            style={{
                                paddingVertical: 4,
                                paddingHorizontal: 10,
                                backgroundColor: '#f3f3f3',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{
                                fontSize: 14,
                            }}>
                                1 min read
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 4,
                        }}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "300",
                        }}>
                            Your money in this month is
                        </Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "bold",
                        }}>
                            $73,859
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <Wallets/>

            <View
                style={{
                    marginHorizontal: 20,
                    padding: 20,
                    borderWidth: 1,
                    marginTop: 20,
                    borderColor: '#d6dce0',
                    backgroundColor: '#fff',
                    borderRadius: 16,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 10,
                        marginBottom: 6,
                    }}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                    }}>
                        Ultimate Rewards®
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'around',
                        gap: 4,
                        paddingTop: 10,
                    }}
                >
                    <View
                        style={{
                            alignItems: 'start',
                            flexDirection: 'column',
                            gap: 4,
                            flexGrow: 1,
                            borderRightWidth: 1,
                            borderRightColor: '#d6dce0',
                        }}
                    >
                        <Text style={{
                            fontSize: 24,
                        }}>
                            84,142
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: 'gray',
                        }}>
                            Available points
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'start',
                            flexDirection: 'column',
                            gap: 4,
                            flexGrow: 1,
                            paddingLeft: 20,
                        }}
                    >
                        <Text style={{
                            fontSize: 24,
                        }}>
                            4,142
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: 'gray',
                        }}>
                            Pending points
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginHorizontal: 20,
                    padding: 20,
                    marginTop: 20,
                    backgroundColor: '#005EB8',
                    borderRadius: 16,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 10,
                        marginBottom: 6,
                    }}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: '#fff',
                    }}>
                        Credit Journey
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 14,
                        paddingTop: 10,
                        marginBottom: 6,
                    }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#dcebfb',
                            borderRadius: "50%",
                        }}
                    >
                        <IconSymbol
                            name="speedometer"
                            size={26}
                            color={"#005EB8"}
                        />
                    </View>
                    <Text style={{
                        fontSize: 34,
                        fontWeight: '400',
                        color: '#fff',
                    }}>
                        784
                    </Text>
                </View>
                <Text style={{
                    fontSize: 12,
                    paddingTop: 10,
                    fontWeight: '400',
                    color: '#f4f4f4',
                }}>
                    Credit score as of {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date())} | by VantageScore® 3.0
                </Text>
                <Text style={{
                    fontSize: 16,
                    paddingTop: 10,
                    fontWeight: '400',
                    color: '#fff',
                }}>
                    Learn more about your credit score and how to improve it.
                </Text>
                <View
                    style={{
                        justifyContent: "flex-end",
                        flexDirection: 'row',
                        marginTop: 20,
                    }}
                >
                    <View
                        style={{
                            borderColor: '#fff',
                            borderWidth: 1,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 14,
                                fontWeight: '600',
                            }}
                        >
                            See details
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 30,
        borderRadius: 20,
        overflowX: "scroll",
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
        alignItems: 'center',
    },
})

export default Accounts