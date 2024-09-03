import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Configuration = ({ selectedOverlay, addTextOverlay, updateOverlay }) => {
  return (
    <div className="w-1/3 bg-gray-300 p-4 flex items-center flex-col">
      <Button onClick={addTextOverlay}>Add Text</Button>

      {selectedOverlay && (
        <div className="mt-4 bg-white shadow-xl rounded-md p-2">
          <Input
            className="bg-gray-100"
            value={selectedOverlay.text}
            onChange={(e) =>
              updateOverlay(selectedOverlay.id, { text: e.target.value })
            }
            placeholder="Enter text"
          />
          <div className="mt-2">
            <label>Position</label>
            <div className="flex gap-4 mb-4">
              <div className="flex gap-3 items-center px-2">
                <h2>X</h2>
                <div className="w-16">
                  <Input
                    className="bg-gray-100"
                    type="number"
                    value={selectedOverlay.x}
                    onChange={(e) =>
                      updateOverlay(selectedOverlay.id, {
                        x: parseInt(e.target.value),
                      })
                    }
                    placeholder="X"
                  />
                </div>
              </div>
              <div className="flex gap-3 items-center px-2">
                <h2>Y</h2>
                <div className="w-16">
                  <Input
                    className="bg-gray-100"
                    type="number"
                    value={selectedOverlay.y}
                    onChange={(e) =>
                      updateOverlay(selectedOverlay.id, {
                        y: parseInt(e.target.value),
                      })
                    }
                    placeholder="Y"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 border-b border-b-gray-700 pb-4">
              <div className="flex gap-2 items-center px-2">
                <h2>W</h2>
                <div className="w-16">
                  <Input
                    className="bg-gray-100"
                    type="number"
                    value={selectedOverlay.width}
                    onChange={(e) =>
                      updateOverlay(selectedOverlay.id, {
                        width: parseInt(e.target.value),
                      })
                    }
                    placeholder="Width"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center px-2">
                <h2>H</h2>
                <div className="w-16">
                  <Input
                    className="bg-gray-100"
                    type="number"
                    value={selectedOverlay.height}
                    onChange={(e) =>
                      updateOverlay(selectedOverlay.id, {
                        height: parseInt(e.target.value),
                      })
                    }
                    placeholder="Height"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <label>Text</label>
            <Select
              className="bg-gray-100"
              value={selectedOverlay.font}
              onValueChange={(value) =>
                updateOverlay(selectedOverlay.id, { font: value })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fonts</SelectLabel>
                  <SelectItem value="Arial">Arial</SelectItem>
                  <SelectItem value="sans-serif">sans-serif</SelectItem>
                  <SelectItem value="serif">serif</SelectItem>
                  <SelectItem value="Georgia">Georgia</SelectItem>
                  <SelectItem value="Times">Times</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-2">
            <label>Size</label>
            <Slider
              value={[selectedOverlay.size]}
              onValueChange={(value) =>
                updateOverlay(selectedOverlay.id, { size: value[0] })
              }
              min={8}
              max={72}
            />
          </div>
          <div className="mt-2">
            <label>Color</label>
            <Input
              className="bg-gray-100"
              type="color"
              value={selectedOverlay.color}
              onChange={(e) =>
                updateOverlay(selectedOverlay.id, { color: e.target.value })
              }
            />
          </div>
          <div className="mt-2 flex justify-center gap-4">
            <Button
              className="bg-gray-100"
              variant={selectedOverlay.bold ? "default" : "outline"}
              onClick={() =>
                updateOverlay(selectedOverlay.id, {
                  bold: !selectedOverlay.bold,
                })
              }
            >
              B
            </Button>
            <Button
              className="bg-gray-100"
              variant={selectedOverlay.italic ? "default" : "outline"}
              onClick={() =>
                updateOverlay(selectedOverlay.id, {
                  italic: !selectedOverlay.italic,
                })
              }
            >
              I
            </Button>
            <Button
              className="bg-gray-100"
              variant={selectedOverlay.underline ? "default" : "outline"}
              onClick={() =>
                updateOverlay(selectedOverlay.id, {
                  underline: !selectedOverlay.underline,
                })
              }
            >
              U
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuration;
