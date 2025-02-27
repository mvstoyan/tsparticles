import type { IValueWithRandom } from "../../IValueWithRandom";

/**
 * @category Options
 * [[include:Options/Particles/ZIndex.md]]
 */
export interface IZIndex extends IValueWithRandom {
    opacityRate: number;
    sizeRate: number;
    velocityRate: number;
}
