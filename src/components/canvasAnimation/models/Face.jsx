import { OrbitControls } from '@react-three/drei';

const Face = () => {
    return (
        <div>
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </div>
    )
}

export default Face;
