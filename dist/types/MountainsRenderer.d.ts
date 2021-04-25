import { BaseRenderer } from "webgl-framework";
import { mat4, vec3 } from "gl-matrix";
export declare class MountainsRenderer extends BaseRenderer {
    private lastTime;
    private angleYaw;
    private loaded;
    private fmSky;
    private fmSmoke;
    private fmSun;
    private fmBird;
    private fmTerrain;
    private skyTexture;
    private textureCloud;
    private textureSunFlare;
    private textureBird;
    private textureTerrainDiffuse;
    private textureTerrainLM;
    private textureTerrainGradient;
    private shaderDiffuse;
    private shaderDiffuseColored;
    private shaderAnimated;
    private shaderTerrain;
    private shaderTerrainOpposite;
    private shaderTerrainWater;
    private shaderTerrainWaterOpposite;
    private customCamera;
    private Z_NEAR;
    private Z_FAR;
    private timerDustRotation;
    private DUST_ROTATION_SPEED;
    private timerDustMovement;
    private DUST_MOVEMENT_SPEED;
    private timerBirdAnimation1;
    private timerBirdAnimation2;
    private BIRD_ANIMATION_PERIOD1;
    private BIRD_ANIMATION_PERIOD2;
    private timerBirdsFly;
    private BIRD_FLIGHT_PERIOD;
    private BIRD_FLIGHT_RADIUS;
    private BIRD_SPREAD;
    private CLOUD_TRAVEL_X;
    private CLOUD_TRAVEL_Y;
    private CLOUD_TRAVEL_Z;
    private PRESETS;
    private currentPreset;
    private preset;
    private SUN_COLOR_FADE;
    private SUN_COLOR;
    private animationBird;
    private cameraMode;
    private currentRandomCamera;
    protected matViewInverted: mat4;
    protected matViewInvertedTransposed: mat4;
    protected matTemp: mat4;
    protected cameraPosition: vec3;
    protected cameraRotation: vec3;
    private readonly cloudCoordinates;
    private readonly closeCloudCoordinates;
    private CAMERAS;
    private readonly CAMERA_SPEED;
    private readonly CAMERA_MIN_DURATION;
    private cameraPositionInterpolator;
    constructor();
    private logCamera;
    setCustomCamera(camera: mat4 | undefined, position?: vec3, rotation?: vec3): void;
    resetCustomCamera(): void;
    onBeforeInit(): void;
    onAfterInit(): void;
    onInitError(): void;
    initShaders(): void;
    loadData(): Promise<void>;
    changeTimeOfDay(): Promise<void>;
    animate(): void;
    /** Calculates projection matrix */
    setCameraFOV(multiplier: number): void;
    /**
     * Calculates camera matrix.
     *
     * @param a Position in [0...1] range
     */
    private positionCamera;
    /** Issues actual draw calls */
    drawScene(): void;
    private setTerrainShaderUniforms;
    private setTerrainWaterShaderUniforms;
    private drawSceneObjects;
    private drawClouds;
    drawBirds(z: number, angleOffset: number): void;
    private getBirdPosition;
    private drawDiffuseVBOFacingCamera;
    private calculateMVPMatrixForSprite;
    private resetMatrixRotations;
    private drawSun;
    private clamp;
    private smoothstep;
    private smootherstep;
    private randomizeCamera;
}