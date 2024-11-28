import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherForecast = () => {
  //REACT FEATURES
  //useState
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Toronto");
    const [search, setSearch] = useState("");
  //Hooks
    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);

    const fetchWeatherData = async (city) => {
        try {
          //API INTEGRATION
            const API_KEY = "30c5bc41047ad15705307fec0129c671";
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError("Failed to fetch weather data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };


    //HANDLE SEARCH
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (search) {
            setCity(search);
            setSearch("");
        }
    };

    if (isLoading) {
        return <p style={styles.loading}>Loading...</p>;
    }

    if (error) {
        return <p style={styles.error}>{error}</p>;
    }

    const { main, weather, wind, sys, name } = weatherData;

    //IMPLEMENT ICON URL (ICON FOR EACH KIND OF WEATHER)
    const iconUrl = weather && `http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`;

    return (
        <div style={styles.container}>
            <div style={styles.searchContainer}>
                <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Enter city..."
                        style={styles.searchInput}
                    />
                    <button type="submit" style={styles.searchButton}>Search</button>
                </form>
            </div>
            <div style={styles.card}>
                <div style={styles.leftSection}>
                    <h2 style={styles.city}>{name}</h2>
                    <p style={styles.date}>{new Date().toLocaleDateString()}</p>
                    <img src={iconUrl} alt={weather[0]?.description} style={styles.icon} />
                    <h1 style={styles.temp}>{main?.temp}°C</h1>
                    <p style={styles.description}>{weather[0]?.description}</p>
                </div>
                <div style={styles.rightSection}>
                    <ul style={styles.details}>
                        <li>
                            <span>Feels Like:</span> <span>{main?.feels_like}°C</span>
                        </li>
                        <li>
                            <span>Humidity:</span> <span>{main?.humidity}%</span>
                        </li>
                        <li>
                            <span>Wind Speed:</span> <span>{wind?.speed} m/s</span>
                        </li>
                        <li>
                            <span>Sunrise:</span>{" "}
                            <span>{new Date(sys?.sunrise * 1000).toLocaleTimeString()}</span>
                        </li>
                        <li>
                            <span>Sunset:</span>{" "}
                            <span>{new Date(sys?.sunset * 1000).toLocaleTimeString()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "url('https://www.patternpictures.com/wp-content/uploads/Small-cloudy-formations-on-a-clear-sky-patternpictures-2913.jpg'), linear-gradient(to bottom, #1E213A, #3C47E9)", 
        backgroundSize: "cover", // To make sure the image covers the entire background
        backgroundPosition: "center center", // To center the image
        color: "white",
        fontFamily: "Arial, sans-serif",
        flexDirection: "column",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#100E1D",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        width: "80%",
        maxWidth: "600px",
        marginBottom: "20px",
    },
    leftSection: {
        flex: 1,
        padding: "20px",
        background: "linear-gradient(to bottom, #3C47E9, #1E213A)",
        textAlign: "center",
        color: "#fff",
    },
    city: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    date: {
        fontSize: "0.9rem",
        marginBottom: "15px",
        opacity: 0.8,
    },
    icon: {
        width: "100px",
        height: "100px",
    },
    temp: {
        fontSize: "3rem",
        fontWeight: "bold",
        margin: "10px 0",
    },
    description: {
        fontSize: "1.2rem",
        textTransform: "capitalize",
        opacity: 0.9,
    },
    rightSection: {
        flex: 1,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1E213A",
    },
    details: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        lineHeight: "1.8",
    },
    loading: {
        textAlign: "center",
        color: "#fff",
    },
    error: {
        color: "#FF6B6B",
        textAlign: "center",
    },
    searchContainer: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    searchForm: {
        display: "flex",
        justifyContent: "center",
        width: "80%",
        maxWidth: "600px",
        borderRadius: "20px",
        overflow: "hidden",
    },
    searchInput: {
        padding: "12px 20px",
        fontSize: "1.1rem",
        borderRadius: "20px 0 0 20px",
        border: "2px solid #3C47E9",
        width: "100%",
        outline: "none",
        transition: "border 0.3s ease",
    },
    searchInputFocus: {
        borderColor: "#FF6B6B",
    },
    searchButton: {
        padding: "12px 20px",
        fontSize: "1.1rem",
        backgroundColor: "#3C47E9",
        color: "#fff",
        border: "2px solid #3C47E9",
        borderRadius: "0 20px 20px 0",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    searchButtonHover: {
        backgroundColor: "#FF6B6B",
    },
};

export default WeatherForecast; 
