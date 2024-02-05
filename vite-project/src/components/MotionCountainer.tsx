import { motion } from "framer-motion";
import '../App.css';

type MotionProps = {
    percent_w1: number;
    percent_w2: number;
}

export default function MotionCountainer({percent_w1, percent_w2}: MotionProps) {
    return (
        <div className="motion-container">
            <motion.div
                className="dynamic-element"
                style={{ 
                    width: `${percent_w1}%`,
                    height: '25px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <p className="para-motion1">
                    {percent_w1 ? `${percent_w1.toFixed(2)}%` : ""}
                </p>
            </motion.div>

            <motion.div
                className="dynamic-element"
                style={{
                    width: `${percent_w2}%`,
                    height: '25px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <p className="para-motion2">
                    {percent_w2 ? `${percent_w2.toFixed(2)}%` : ""}
                </p>
            </motion.div>
    </div>
    )
}
