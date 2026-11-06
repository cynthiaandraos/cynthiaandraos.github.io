                style={{
                  touchAction: "pan-y",
                }}
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.img
                    key={`${selectedProject.title}-${activeImage}`}
                    src={
                      selectedProject.images[activeImage].src
                    }
                    alt={
                      selectedProject.images[activeImage].title
                    }
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    draggable={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full select-none object-contain"
                  />
                </AnimatePresence>

                {/* Desktop navigation arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#681523] shadow-md sm:flex"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}

                {/* Mobile gallery information */}
                <div className="absolute inset-x-4 bottom-[calc(env(safe-area-inset-bottom)+16px)] z-20 text-center sm:hidden">
                  <p
                    className="mb-2 text-lg text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selectedProject.title}
                  </p>

                  <p className="text-xs text-[#A45D69]">
                    {activeImage + 1} /{" "}
                    {selectedProject.images.length}
                  </p>

                  {selectedProject.images.length > 1 && (
                    <p className="mt-2 text-[11px] uppercase tracking-widest text-[#A45D69]">
                      Swipe to explore
                    </p>
                  )}
                </div>
              </div>

              {/* Desktop image title */}
              <div className="hidden shrink-0 border-t border-[#E8D2CF] px-4 py-3 text-center sm:block">
                <p className="text-sm font-medium text-[#681523]">
                  {
                    selectedProject.images[activeImage]
                      .title
                  }
                </p>

                <p className="mt-1 text-xs text-[#A45D69]">
                  {activeImage + 1} /{" "}
                  {selectedProject.images.length}
                </p>
              </div>

              {/* Desktop gallery thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="hidden shrink-0 justify-center gap-3 overflow-x-auto border-t border-[#E8D2CF] p-3 sm:flex">
                  {selectedProject.images.map(
                    (image, index) => (
                      <button
                        key={image.title}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View ${image.title}`}
                        className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${
                          activeImage === index
                            ? "border-[#850F25]"
                            : "border-transparent opacity-60"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </button>
                    )
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
