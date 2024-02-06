import { motion } from "framer-motion";
import '../App.css';

type MotionProps = {
    percent_w1: number;
    percent_w2: number;
    colorBgOne: string;
    colorBgTwo: string;
}

export default function MotionCountainer({percent_w1, percent_w2, colorBgOne, colorBgTwo}: MotionProps) {
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
                <p className="para-motion1" 
                    style={{background: `linear-gradient(30deg, ${colorBgOne} 10%, ${colorBgTwo} 90%)`}}>
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
                <p className="para-motion2"
                    style={{background: `linear-gradient(30deg, ${colorBgTwo} 10%, ${colorBgOne} 90%)`}}>
                    {percent_w2 ? `${percent_w2.toFixed(2)}%` : ""}
                </p>
            </motion.div>
    </div>
    )
}
