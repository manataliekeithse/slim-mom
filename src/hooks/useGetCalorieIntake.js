import { useSelector } from "react-redux";
import { selectCalorie, selectCalorieIsError, selectCalorieIsLoading } from "../redux/calorie/selectors.js";

export const useGetCalorieIntake = () => {
	const result = useSelector(selectCalorie);
	const calorieError = useSelector(selectCalorieIsError);
	const calorieIsLoading = useSelector(selectCalorieIsLoading);

	return { result, calorieError, calorieIsLoading };
}