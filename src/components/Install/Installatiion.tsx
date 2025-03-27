
// import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Installatiion = () => {
  return (
    <>
        {/* <Navbar ></Navbar> */}
        <div className="bg-gray-100 p-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Installation and Settings
        </h1>
        <p className="text-gray-700">
          This section provides information about the software and hardware settings required to run
          <strong> GPIO Test</strong> on the ABCDE RISC-V SoC Kit in Windows 10 PowerShell of Ubuntu 20.04.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6"> Software Settings</h2>
        
        <h3 className="text-xl font-semibold text-gray-700 mt-4">Toolchain Setup</h3>
        <p className="text-gray-700">Install PyFTDI library support. PyFTDI relies on PyUSB, which requires a native dependency: <strong>libusb 1.x</strong>.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md mt-2 overflow-x-auto">
          sudo apt-get install libusb-1.0 libusb-1.0-0-dev{"\n"}
          sudo pip3 uninstall setuptools{"\n"}
          sudo apt-get install python3-setuptools{"\n"}
          sudo pip3 install pyftdi
        </pre>

        <p className="text-gray-700 mt-4">Install the RISC-V toolchain using the command below:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-md mt-2 overflow-x-auto">
          sudo apt-get install gcc-riscv64-unknown-elf
        </pre>

        <p className="text-gray-700 mt-4">
          In case this does not work, you can get the sources yourself here:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md mt-2 overflow-x-auto">
          git clone https://github.com/ABCDE/ABCDE_software.git
        </pre>

        <h3 className="text-xl font-semibold text-gray-700 mt-6"> Programming Flow to Run GPIO Test</h3>
        <p className="text-gray-700">
          GPIO test is a simple script to toggle all the GPIOs on the board.
          The commands below illustrate the process of compiling code.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md mt-2 overflow-x-auto">
          cd ABCDE_software/firmware/gpio_test{"\n"}
          make PART=&lt;part_id&gt;
        </pre>
      </div>
    </div>  

    <Footer></Footer>  
    </>
  )
}

export default Installatiion